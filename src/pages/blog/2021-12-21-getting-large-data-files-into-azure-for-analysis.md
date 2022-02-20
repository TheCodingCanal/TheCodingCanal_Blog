---
templateKey: 'blog-post'
title: 'Getting Large Data Files into Azure for Analysis'
date: 2021-12-21T15:04:10.000Z
featuredpost: false
featuredimage: /img/azure.png
description: 
tags:
  - azure
  - data
  - azure blob
  - zst
---

![](https://miro.medium.com/max/1000/1*ltTEPpUL6ZnOJFThNqC-aA.png)

A friend of mine recently asked me this question:

> Ok Azure man, question for you. Someone just shared a 90GB file with me that is a single database. Haven’t downloaded it. It’s also compressed using a .zst compression algorithm. Not sure if I even want this file locally.
> 
> I could download locally, decompress, make sql server, and get file in through there. But I don’t think that’s a good route. This would probably require big data tooling. Not sure if this is up your alley or not. Azure function to download, and import file into cloud database?
> 
> This dataset is also missing one column, which I could get through an api.
> 
> 90GB is also huge, no way I’d be in free tier?
> 
> I could just use the 300MB dataset I have and try to get the info from the api for those, as opposed to downloading the 90GB, which might be way more than I’d ever need…

My first thought is that if the extra column from the API is necessary then let’s make sure we can get that API working with the small dataset before messing with the big file. If it’s not necessary, then let’s see what we can do with the file. Since interacting with an API is easier to do locally with a tool like Postman, curl, or a console app, let’s focus on the azure part of this question which is dealing with the large file.

When it comes to a developer playing around with getting files into Azure, you likely won’t have the resources to setup an Azure Stack Edge with Data Box Gateway, or a managed data pipeline from your ISP straight into Azure. Thus, you’ll be uploading data through the internet via the Azure portal or the Azure Storage Explorer. If the file is really large and valuable enough you could pay to have a storage device shipped through the mail to an Azure datacenter (1), but we’re not at that scale here. My recommendation would be to leave the file as compressed as possible, upload it on a computer that won’t be used much while uploading, and hardwire in if possible.

As to where are we uploading it to, we’ll be using Azure Blob Storage because it interacts with a lot of different Azure services and doesn’t cost that much. For the hot tier under 50 TB we’re looking at $0.018 per GB, per month. With our 90GB file that is $1.62 per month (2). This will probably expand once it is decompressed, but since we’re just doing some statistical analysis over a period of a few days our costs won’t be significant.

![](https://miro.medium.com/max/1400/1*Pa08ASrbXL_CIRM_3ioC_A.png)

Azure Blob Storage pricing

Once we get the file up there, how are we going to unzip it? While we could use an Azure Function to run code off a Blob Trigger and automatically decompress files that we upload (3), it’ll likely be wasted time since we’ll only be doing this once. For our one-time decompression, our best bet is to use the Azure CLI with a bit of PowerShell or bash magic. You can hook up a storage account to the CLI and run scripts on those files. With bash and the tar command we can decompress our .zst file, which uses a zstd compression algorithm.

![](https://miro.medium.com/max/1374/1*0T44GvuIma1KtO8FmJgVog.png)

Now that we got our file decompressed, we need to figure out how to analyze the data. If it’s in some sort of row and column format we could try to get it into a familiar database like SQL Server, MySQL, or PostgreSQL. The costs of a large SQL Server in Azure might be a bit much even for temporary analysis (4), but we could play around with that and see. The benefits would be much fast queries and a simple, friendly interface. We could also try to use Cosmos DB which generally is used for large unstructured datasets but does have a SQL interface for querying (5) and can have slow query times. That’s what we’ll be diving into in my next blog, please subscribe so you don’t miss it.

(1) Azure Data Transfer methods:  [Choose an Azure solution for data transfer | Microsoft Docs](https://docs.microsoft.com/en-us/azure/storage/common/storage-choose-data-transfer-solution)

(2) Azure Blob Storage — pricing:  [Azure Storage Blobs Pricing | Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/storage/blobs/)

(3) Azure Functions — Blog Triggers:  [https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob)

(4) Azure SQL Server — pricing:  [Pricing — Azure SQL Database Single Database | Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/azure-sql-database/single/)

(5) Azure Cosmos DB — SQL Interface:  [Getting started with SQL queries in Azure Cosmos DB | Microsoft Docs](https://docs.microsoft.com/en-us/azure/cosmos-db/sql/sql-query-getting-started)