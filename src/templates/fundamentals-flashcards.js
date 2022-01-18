import React from "react";
import Layout from "../components/Layout";
import { FlashcardComponent } from "../components/Flashcard";

const fundamentalsData = [
  {
    front: {
      text: "Vnets exist within what?"
    },
    back: {
      text: "One Subscription and one Region"
    }
  }
]


const FundamentalsFlashcardPage = () => {
  return (
    <Layout>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Azure Fundamentals Flashcards
                </h2>
                <FlashcardComponent dataSource={fundamentalsData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FundamentalsFlashcardPage;

