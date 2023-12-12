"use strict";

const addCardBtnOpen = document.querySelector(".add-card");
const addCardBtnClose = document.querySelector(".close");

const cardInput = document.querySelector(".input-container");
const cardContainer = document.querySelector(".card-container");

// Input Data
const videoTitle = document.getElementById("video-title");
const channelName = document.getElementById("channel-name");
const imgURL = document.getElementById("img-url");
const totalViews = document.getElementById("views");
const releaseDate = document.getElementById("day");
const videoDuration = document.getElementById("duration");

const addCard = document.querySelector(".add-details");


// Output Data

addCard.addEventListener("click", () => {
  const uploadDate = new Date(releaseDate.value).getTime();
  const currDate = new Date().getTime();

  const viewCountString = viewString(totalViews.value);

  const releaseDateString = timeGone(currDate, uploadDate);

  const duration = durationString(videoDuration.value);

  cardMaker(videoTitle.value, imgURL.value, channelName.value, viewCountString, releaseDateString, duration);
});


function cardMaker(title, img, channelName, views, date, duration) {
  const card = document.createElement("div");

  card.classList.add("card");

  card.innerHTML = `
      <div class="card-img">
        <img src="${img ? img : "images/card-img.jpg"}" alt="thumbnail">
        <div class="video-time">
          <span class="time">${duration ? duration : "12:23"}</span>
        </div>
      </div>

      <div class="card-text">
        <h3 class="title">${title ? title : "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73"}
        </h3>

        <div class="channel-name">
          <span>${channelName ? channelName : "CodeWithHarry"}</span> <i class="fa-solid fa-check"></i>
        </div>

        <div class="video-details">
          <div class="views">
            <span class="view-number">${views ? views : "123K"}</span>
            <span>views</span>
          </div>

          <div class="dot"></div>

          <div class="video-date">${date}</div>
        </div>
      </div>
  `;

  cardContainer.append(card);
}

function durationString(duration) {

  const hrs = Math.floor(duration / 60);
  const min = duration - (hrs * 60);

  return `${String(hrs).padStart(2, 0)}:${String(min).padStart(2, 0)}`;
}

function viewString(views) {

  if (views < 1000) {
    return views;
  }
  else if (views < 1000000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  else if (views < 1000000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  }

  else {
    return `${(views / 1000000000).toFixed(1)}B`;
  }
}

function timeGone(currDate, uploadDate) {
  const timeElapsed = Math.floor((currDate - uploadDate) / 1000 / 60 / 60);

  if (timeElapsed > 24) {
    const days = timeElapsed / 24;

    if (Math.floor(days / 365) >= 1) {
      return `${Math.floor(days / 365)} years ago`;
    }
    else {
      if (days < 31) {
        return `${Math.floor(days)} days ago`;
      }
      else {
        return `${Math.floor(days / 30)} months ago`;

      }
    }
  }
  else if (timeElapsed >= 1) {
    console.log(timeElapsed);
    return `${timeElapsed} hours ago`;

  }
  else {
    const minutes = Math.floor((currDate - uploadDate) / 1000 / 60);
    return `${minutes} minutes ago`;
  }
}

// card open and close

addCardBtnOpen.addEventListener("click", () => {
  cardInput.style.display = "flex";
  setTimeout(() => {
    cardInput.style.left = "50%";
  }, 20);
});

addCardBtnClose.addEventListener("click", () => {
  cardInput.style.left = "250%";
  setTimeout(() => {
    cardInput.style.display = "none";
  }, 300);
});