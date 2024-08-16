import React, { useState, useEffect } from "react";
import axios from "axios";
import { type LoaderFunction, useLoaderData } from "react-router-dom";

const key = "DfDBmgofFwSMdzLNjRAL";
const secret = "KXFRPyshHlGOKidtXcpeJPVpmcebZTUz";

export const loader: LoaderFunction = async ({ params }) => {
  const url = `https://api.discogs.com/database/search?sort=year&sort_order=desc&per_page=10&page=1`;

  const response = await axios(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Discogs key=${key}, secret=${secret}`,
    },
  });
  return response;
};

const Rankings = () => {
  const { data } = useLoaderData();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Top 10 Daily Music Rankings</h1>
      <ul style={styles.list}>
        {data.results.map((item, index) => (
          <li key={index} style={styles.listItem}>
            <div style={styles.rankContainer}>
              <span style={styles.rank}>{index + 1}</span>
            </div>
            <div style={styles.infoContainer}>
              <span style={styles.titleText}>{item.title}</span>
              <span style={styles.artistText}> by {item.artist}</span>
              {item.year && <span style={styles.yearText}> ({item.year})</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    color: "#f0f0f0",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#e0e0e0",
    borderBottom: "2px solid #555",
    paddingBottom: "10px",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    padding: "15px 10px",
    borderBottom: "1px solid #444",
    backgroundColor: "#222",
    borderRadius: "8px",
    marginBottom: "10px",
    transition: "background-color 0.3s",
  },
  listItemHover: {
    backgroundColor: "#333",
  },
  rankContainer: {
    width: "40px",
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ff6b6b",
  },
  infoContainer: {
    flex: "1",
    marginLeft: "15px",
  },
  titleText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  artistText: {
    fontSize: "18px",
    color: "#bbbbbb",
  },
  yearText: {
    fontSize: "16px",
    color: "#888888",
  },
};

export default Rankings;
