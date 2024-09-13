export function initCards() {
  const cardsContainer = document.querySelector("#cards .columns");
  const cardData = [
    {
      title: "Card 1",
      description: "This is the first card.",
      imageUrl: "https://bulma.io/images/placeholders/1280x960.png",
    },
    {
      title: "Card 2",
      description: "This is the second card.",
      imageUrl: "https://bulma.io/images/placeholders/1280x960.png",
    },
    {
      title: "Card 3",
      description: "This is the third card.",
      imageUrl: "https://bulma.io/images/placeholders/1280x960.png",
    },
  ];

  cardData.forEach((card) => {
    const cardElement = `
            <div class="column is-one-third">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="${card.imageUrl}" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">${card.title}</p>
                                <p class="subtitle is-6">${card.description}</p>
                            </div>
                        </div>
                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris.
                        </div>
                    </div>
                </div>
            </div>
        `;
    cardsContainer.insertAdjacentHTML("beforeend", cardElement);
  });
}
