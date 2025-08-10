import heroImage from "../assets/hero-image.png";

export default function Hero() {
  return (
    <section className="relative">
      <img
        src={heroImage}
        alt="Laptop workspace"
        className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
      />

          <div
      className="
        hero-text
        bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD]
        p-6 lg:p-10 max-w-lg text-white

        static lg:absolute
        lg:top-1/3 lg:left-20

        lg:mt-0
      "
    >

        <h1 className="text-3xl lg:text-4xl md:text-5xl font-inter font-bold mb-4">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <button className="bg-[#F28D35] hover:bg-orange-600 px-6 py-2 rounded font-semibold">
          GET FREE CONSULTATION
        </button>
      </div>
    </section>
  );
}
