import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./shared/RenderTag";
import { Tag } from "@/types";

const popularTags: Tag[] = [
    {
        id: 1,
        tagName: "javascript",
        totalQuestions: 50,
    },
    {
        id: 2,
        tagName: "python",
        totalQuestions: 4,
    },
    {
        id: 3,
        tagName: "java",
        totalQuestions: 41,
    },
    {
        id: 4,
        tagName: "c#",
        totalQuestions: 30,
    },
    {
        id: 5,
        tagName: "ruby",
        totalQuestions: 300,
    },
];

const topQuestions = [
    { id: 1, title: "How can I optimize my code for better performance?" },
    {
        id: 2,
        title: "What are the best practices for handling exceptions in my code?",
    },
    {
        id: 3,
        title: "How can I securely store and manage user passwords in my application?",
    },
    {
        id: 4,
        title: "What are the differences between synchronous and asynchronous programming in JavaScript?",
    },
    {
        id: 5,
        title: "How can I effectively debug and troubleshoot issues in my code?",
    },
];
const RigthSidebar = () => {
    return (
        <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col justify-between overflow-y-auto border-l px-6 pb-8 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
            <div className="">
                <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
                <div className="mt-7 flex w-full flex-col gap-[30px]">
                    {topQuestions.map((question) => {
                        return (
                            <Link
                                href={`/questions/${question.id}`}
                                key={question.id}
                                className="flex cursor-pointer items-center justify-between gap-7"
                            >
                                <p className="body-medium text-dark500_light700">
                                    {question.title}
                                </p>
                                <Image
                                    src="/assets/icons/chevron-right.svg"
                                    alt="chevrom right"
                                    width={20}
                                    height={20}
                                    className="invert-colors"
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="mt-16">
                <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
                <div className="mt-7 flex flex-col gap-4">
                    {popularTags.map((tag) => {
                        return (
                            <RenderTag
                                key={tag.id}
                                tag={tag}
                                showCount={true}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RigthSidebar;