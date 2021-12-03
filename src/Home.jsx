import React from "react";
import "./index.css";
import { Allcomponents } from "./Allcomponents";
import { Services } from "./Allcomponents";
import Features_Home from "./Features_Home";
export default function Home() {
  return (
    <>
      <div>
        <Allcomponents
          main_heading="Property Dealing Center"
          main_text="Best Dealing Ever"
          btn_txt="get start"
          card_txt="Cover_Areas"
          card_paragraph="Our_Startup"
          card_para_txt="Hello! Welcome to our dealing center here you can place an order of
       your home with beatiful spectutaram and and complete your dreams
       with it as you can, we provided with discound prices in kohat
       different places like KDA, main bazar etc you can check out with our
       areas page and completer your desire dreams."
        />
      </div>

      {/* Services Section */}
      <div>
        <Services
          main_heading="Our Projects"
          main_para="This is the some of our projects below you can see it it is delivered
      by our honor company property construction and you can check out these
      with others laws and construction you can contact us easily."
        />
      </div>

      {/* Features Section */}
      <div>
        <Features_Home />
      </div>
    </>
  );
}
