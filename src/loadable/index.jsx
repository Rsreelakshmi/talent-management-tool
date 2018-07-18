import React from "react";
import Loadable from "react-loadable";

export const LoadableHomepage = Loadable({
  loader: () => import("../views/Homepage"),
  loading() {
    return <div>Loading...</div>;
  }
});

export const LoadableSummarypage = Loadable({
  loader: () => import("../views/Summarypage"),
  loading() {
    return <div>Loading...</div>;
  }
});

export const LoadableCreateTalentPage = Loadable({
  loader: () => import("../views/Createtalentpage"),
  loading() {
    return <div>Loading...</div>;
  }
});

export const LoadableLandingPage = Loadable({
  loader: () => import("../views/Landingpage"),
  loading() {
    return <div>Loading...</div>;
  }
});

export const LoadableLoader = Loadable({
    loader: () => import("../components/MainLoader/MainLoader"),
    loading() {
      return <div>Loading...</div>;
    }
  });
