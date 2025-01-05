// ==UserScript==
// @name           [Amazon] Camel Graph Only
// @version        2.0
// @description    Adds a button to load the CamelCamelCamel price graph on Amazon product pages
// @namespace      https://github.com/6uhrmittag
// @Author         Original by github.com/n1ckDotEXE/violentmonkey-scripts; modified by 6uhrmittag
// @homepageURL    https://github.com/6uhrmittag/violentmonkey-scripts
// @downloadURL    https://github.com/6uhrmittag/Itch-Sort-And-Export/raw/main/add-camelcamelcamel-graph.js
// @include        https://www.amazon.*/*
// @include        https://smile.amazon.*/*
// ==/UserScript==

(function () {
    // Button configuration
    const buttonText = "Load Price Graph";
    const buttonStyles = `
    margin-top: 10px;
    margin-left: -10px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    background-color: #0073e6;
    color: white;
    border: none;
    border-radius: 4px;
  `;

    // Determine country code for CamelCamelCamel
    const countryCode = (() => {
        const domainParts = document.domain.split(".");
        const country = domainParts[domainParts.length - 1];
        return country === "com" ? "us" : country;
    })();

    // Find the current product's ASIN
    const asin = (() => {
        const asinElement = document.getElementById("ASIN") || document.getElementsByName("ASIN.0")[0];
        return asinElement ? asinElement.value.trim() : null;
    })();

    if (!asin) return; // No ASIN found, exit script

    // Create the button
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.style.cssText = buttonStyles;

    // Append the button to the price section
    const priceDiv = document.getElementById("unifiedPrice_feature_div");
    if (priceDiv) {
        priceDiv.appendChild(button);
    }

    // Add click event listener to load the graph
    button.addEventListener("click", function () {
        // Disable the button to prevent multiple clicks
        button.disabled = true;
        button.textContent = "Loading...";

        // Create the graph container dynamically
        const graphHTML = `
      <a target='_blank' href='https://${countryCode}.camelcamelcamel.com/product/${asin}'>
        <img style='max-height: 325px;' 
             src='https://charts.camelcamelcamel.com/${countryCode}/${asin}/amazon-new.png?force=1&zero=0&w=400&h=250&desired=false&legend=1&ilt=1&tp=all&fo=0' />
      </a>
    `;

        // Replace the button with the graph
        const graphContainer = document.createElement("div");
        graphContainer.id = "camelGraphContainer";
        graphContainer.innerHTML = graphHTML;
        button.replaceWith(graphContainer);
    });
})();