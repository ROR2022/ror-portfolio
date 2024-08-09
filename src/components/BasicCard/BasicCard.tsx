"use client"
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
//import Link from 'next/link'

interface BasicCardProps {
  dataCard: {
    title: string;
    shortDescription: string;
    description: string;
    url: string;
    imageURL: string;
    codeLink: string;
  };
}

const BasicCard: FC<BasicCardProps> = ({ dataCard }) => {
  const { title, shortDescription, description, url, imageURL, codeLink } = dataCard;
  const [completeURL, setCompleteURL] = useState("");
  useEffect(() => {
    setCompleteURL(`${window.location.origin}${imageURL}`);
  }, []);
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "5px",
        padding: "1rem",
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className="max-w-sm rounded overflow-auto shadow-lg "
    >
      {imageURL && (
        <Image
          onClick={() => window.open(completeURL, "_blank")}
          src={imageURL}
          alt={title}
          className="w-full"
          width={300}
          height={0}
          style={{
            cursor: "pointer",
            width: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{shortDescription}</p>
      </div>
      {url && (
        <div className="px-6 pt-4 pb-2">
          <a
            href={url}
            className="text-indigo-500 hover:text-indigo-700 font-semibold"
          >
            Learn More
          </a>
        </div>
      )}
      {codeLink && (
        <div className="px-6 pt-4 pb-2">
          <a
            href={codeLink}
            className="text-indigo-500 hover:text-indigo-700 font-semibold"
          >
            Code Link
          </a>
        </div>
      )}
      {description && (
        <div className="px-6 pt-4 pb-2">
            <p className="text-gray-700 text-base">{description}</p>
        </div>
        )}

    </div>
  );
};

export default BasicCard;
