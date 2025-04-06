const Products = () => {
    const isLoading = false;
    const errorMessage = "";
    const products = [
        {
            productId: 652,
            productName: "Iphone Xs max",
            image: "https://placehold.co/600x400",
            description: "Experience the latest in mobile technology with advanced cameras, powerful processing, and an all-day battery.",
            quantity: 0,
            price: 1450.0,
            discount: 10.0,
            specialPrice: 1305.0,
        },
        {
            productId: 654,
            productName: "MacBook Air M2s",
            image: "https://placehold.co/600x400",
            description: "Ultra-thin laptop with Apple's M2 chip, providing fast performance in a lightweight, portable design.",
            quantity: 0,
            price: 2550.0,
            discount: 20.0,
            specialPrice: 2040.0,
        }
    ]
    return(
      <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
          {isLoading ? (
              <p>It is loading...</p>
          ) : errorMessage ? (
              <div></div>
          ) : (
              <div></div>
          )
          }
      </div>
    );
}