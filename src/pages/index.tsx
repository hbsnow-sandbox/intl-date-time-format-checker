import React from "react";

import { NextPage } from "next";
import dynamic from "next/dynamic";
import { classnames } from "tailwindcss-classnames";

import { IntlForm } from "../components/IntlForm";
import { Props as IntlListProps } from "../components/IntlList";
import { IntlTitle } from "../components/IntlTitle/IntlTitle";

const IntlList = dynamic<IntlListProps>(
  () => import("../components/IntlList/IntlList").then((mod) => mod.IntlList),
  { ssr: false }
);

const Page: NextPage = () => {
  return (
    <div className="grid grid-flow-row auto-rows-max">
      <header className={classnames("p-4", "bg-white")}>
        <div className={classnames("container", "mx-auto")}>
          <IntlTitle />
        </div>
      </header>

      <main className={classnames("grid", "grid-flow-row", "auto-rows-max")}>
        <div
          className={classnames(
            "p-4",
            "bg-gradient-to-r",
            "from-blue-600",
            "to-purple-500"
          )}
        >
          <div
            className={classnames(
              "container",
              "mx-auto",
              "p-4",
              "bg-white",
              "rounded-lg"
            )}
          >
            <IntlForm />
          </div>
        </div>
        <div className={classnames("p-4")}>
          <div className={classnames("container", "mx-auto")}>
            <IntlList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;