"use client";

import Link from "next/link";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Bold, Text } from "@tremor/react";
import { Pacifico } from "next/font/google";

import { Card } from "@/components/tremor";
import classNames from "classnames";

const GITHUB_URL = "https://github.com/paradedb/paradedb";
const TWITTER_URL = "https://twitter.com/paradedb";
const SLACK_URL =
  "https://join.slack.com/t/paradedbcommunity/shared_invite/zt-217mordsh-ielS6BiZf7VW3rqKBFgAlQ";

const handwriting = Pacifico({ weight: "400", subsets: ["latin"] });

const Welcome = () => {
  return (
    <div className={classNames("fadeIn")}>
      <Card>
        <Bold className="text-neutral-100 text-xl">Hey there! 👋</Bold>
        <Text className="text-neutral-300 mt-4">
          Welcome to the private beta of ParadeDB Cloud, a fully managed version
          of ParadeDB.
        </Text>
        <Text className="text-neutral-300 mt-4">
          Today, the product is simple — just a ParadeDB instance that you can
          connect to. The goal is to deliver a crystal-clear value proposition:
          a highly-available, Postgres-based ElasticSearch alternative optimized
          for search.
        </Text>
        <Text className="text-neutral-300 mt-4">
          The next release will introduce configurability over your ParadeDB
          instance size.
        </Text>
        <Text className="text-neutral-300 mt-4">
          Since this is a beta, we&apos;re not charging 💰. Usage of ParadeDB
          will remain free until our public launch, scheduled for the end of
          2023. We&apos;ll give you plenty of notice before we start charging,
          and we&apos;ll be sure to offer a grandfathered plan for beta users.
        </Text>
        <Text className="text-neutral-300 mt-4">
          The core team is shipping fast and in public over the next few months.
          There are a good few ways to follow the journey:
        </Text>
        <Text className="text-neutral-300 mt-4">
          —
          <Link href={GITHUB_URL} target="_blank" className="pl-2 underline">
            <Bold>Github repo</Bold>
          </Link>{" "}
          to view the code, dicuss features, and report bugs
        </Text>
        <Text className="text-neutral-300 mt-4">
          —
          <Link href={TWITTER_URL} target="_blank" className="pl-2 underline">
            <Bold>Twitter</Bold>
          </Link>{" "}
          for public announcements
        </Text>
        <Text className="text-neutral-300 mt-4">
          —
          <Link href={SLACK_URL} target="_blank" className="pl-2 underline">
            <Bold>Slack community</Bold>
          </Link>{" "}
          to chat with the core team and other users
        </Text>
        <Text className="text-neutral-300 mt-4">
          We&apos;re excited to see what you&apos;ll build with ParadeDB!
        </Text>
        <Text className="text-neutral-300 mt-8">Warmly,</Text>
        <Text
          className={classNames(
            handwriting.className,
            "text-neutral-300 mt-1 text-xl",
          )}
        >
          The ParadeDB Team
        </Text>
      </Card>
    </div>
  );
};

export default withPageAuthRequired(Welcome);
