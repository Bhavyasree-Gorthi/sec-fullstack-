document.getElementById("fetchButton").addEventListener("click", fetchTeslaNews);

async function fetchTeslaNews() {
  const container = document.getElementById("newsContainer");
  container.innerHTML = "<p>Loading Tesla news...</p>";

  try {
    const apiKey = "5529ea51c742eaa88d6e1a86c6d788";
    const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2025-08-12&sortBy=publishedAt&apiKey=${apiKey}`;


    const proxy = "https://cors-anywhere.herokuapp.com/";
    const response = await fetch(proxy + apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    container.innerHTML = "";

    if (!data.articles || data.articles.length === 0) {
      container.innerHTML = "<p>No Tesla news found.</p>";
      return;
    }

    data.articles.forEach((article, index) => {
      const card = document.createElement("div");
      card.className = "news-card";

      card.innerHTML = `
        <h3>${article.title || "No Title"}</h3>
        <p><strong>ID:</strong> ${index + 1}</p>
        <p><strong>Name:</strong> ${article.source?.name || "Unknown"}</p>
        <p><strong>Author:</strong> ${article.author || "Not Available"}</p>
        <p><strong>Published:</strong> ${new Date(article.publishedAt).toLocaleString()}</p>
        <a href="${article.url}" target="_blank">Read More</a>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p style="color:red;">Error fetching news: ${error.message}</p>`;
    console.error("Fetch error:", error);
  }
}
