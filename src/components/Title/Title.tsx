export function Title() {
  const titleImageUrl =
    "https://ik.imagekit.io/fy1b7fw4h/640703ce95e5b2830c19b683089231c1-removebg-preview%20(1).png";

  return (
    <div className="title-con">
      <a href="/" className="home-link flex justify-start">
        <div className="img-con">
          <img
            className="w-24"
            src={titleImageUrl}
            alt="Fullstack developer ready to code!"
          />
        </div>
        <span className="title-heading-con">
          <h1 className="title-heading font-bold text-3xl">Fullstack developer ready to code!</h1>
        </span>
      </a>
    </div>
  );
}
