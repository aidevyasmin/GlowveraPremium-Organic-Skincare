// app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold text-emerald-700 text-center mb-12">About Glowvera</h1>

      {/* Brand Story */}
      <section className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <Image
            src="/about-brand-story-placeholder.jpg" // Placeholder image
            alt="Glowvera Brand Story"
            width={600}
            height={400}
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Brand Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Glowvera was born from a passion for natural beauty and a belief in the power of purity.
            Inspired by ancient skincare traditions and modern dermatological science, we embarked on a journey
            to create products that truly nurture the skin, bringing out its natural radiance.
            Every formulation is a testament to our commitment to excellence, crafted with the finest
            ingredients nature has to offer.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe that true beauty emanates from within, and our mission is to provide you with the tools
            to let your inner glow shine through. Join us in embracing a skincare ritual that is both
            effective and deeply enriching.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16 bg-gray-50 p-10 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Mission & Vision</h2>
        <div className="flex flex-col md:flex-row justify-around gap-8">
          <div className="md:w-1/2 text-center">
            <h3 className="text-2xl font-bold text-emerald-600 mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower individuals to achieve healthy, radiant skin through meticulously crafted,
              natural, and effective skincare solutions. We strive to foster confidence and well-being
              by honoring the body&apos;s natural processes.
            </p>
          </div>
          <div className="md:w-1/2 text-center">
            <h3 className="text-2xl font-bold text-emerald-600 mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be a globally recognized leader in sustainable and ethical skincare,
              setting new standards for product efficacy and environmental responsibility,
              while inspiring a community dedicated to holistic beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Natural Ingredients Explanation - Refactored */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Commitment to Natural Skincare</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1: The Power of Nature */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/placeholder-power-of-nature.svg" alt="The Power of Nature" width={300} height={200} className="rounded-md mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">The Power of Nature</h3>
            <p className="text-gray-700 text-sm">
              We harness the potent power of botanicals, essential oils, and naturally derived compounds for effective skincare. Our formulations avoid harsh chemicals, parabens, and synthetic fragrances.
            </p>
          </div>

          {/* Box 2: Finest Ingredients */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/placeholder-finest-ingredients.svg" alt="Finest Ingredients" width={300} height={200} className="rounded-md mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Finest Ingredients</h3>
            <p className="text-gray-700 text-sm">
              Meticulously selected for proven efficacy and purity, every component plays a vital role in delivering exceptional results.
            </p>
          </div>

          {/* Box 3: Natural Ingredients */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/placeholder-natural-ingredients.svg" alt="Natural Ingredients" width={300} height={200} className="rounded-md mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Natural Ingredients</h3>
            <p className="text-gray-700 text-sm">
              From soothing aloe vera to revitalizing green tea extracts and nourishing argan oil, scientifically balanced for your skin's health and beauty.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
