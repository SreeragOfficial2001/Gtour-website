import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Trip1 from "../../assets/Trip1.jpg";
import Trip2 from "../../assets/Trip2.jpg";
import Trip3 from "../../assets/Trip3.jpg";
import Trip4 from "../../assets/Trip4.jpg";
import Trip5 from "../../assets/Trip5.jpg";
import Trip6 from "../../assets/Trip6.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BlogPostDetail = () => {
  const { postId } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: " We are Grand Tour World Class Travel Agency",
      date: "22 Nov",
      imageUrl: Trip1,
      content: (
        <div>
          <h2> We are Grand Tour World Class Travel Agency</h2>

          <p>
            Travel apps have become necessary tools for modern travellers. They
            offer a wide range of services, from flight booking and hotel deals
            to creating personalised travel itineraries. These mobile apps
            simplify travel planning by providing everything from real-time
            flight updates to offline maps, ensuring users navigate even in
            areas with limited connectivity. According to a report by Amazon Web
            Services, the global online travel booking market, valued at $485.1
            billion in 2022, is expected to grow to $1.59 trillion by 2032, with
            a CAGR of 12.6%. The hotel booking app market, the value is
            anticipated to increase from $4.86 billion in 2023 to $7.64 billion
            by 2025, as Trends Global Survey claims, reflecting a growing
            reliance on mobile platforms for travel arrangements.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title:
        "Happiness is a way of travel, not a destination",
      date: "19 Nov",
      imageUrl: Trip2,
      content: (
        <div>
          <h2>
            The Power of Executive Presence: How to Command Respect in the
            Workplace
          </h2>
          <p>
            The common types of travel apps include flight and hotel booking
            apps, excursion planners, vehicle rental apps, and apps for language
            learning. Each type serves a specific purpose, offering
            budget-friendly travel tips, helping users find the best
            accommodations, or facilitating transportation arrangements. Popular
            apps like Airbnb and Skyscanner help users book flights and find
            unique accommodations, while others focus on social experiences or
            offer real-time flight updates. Core features of travel apps include
            functionalities that enhance the user experience, such as offline
            maps, personalised itineraries, and integration with payment systems
            like PayPal or Apple Pay. These apps help travellers save time and
            money by providing access to the best deals, offering real-time
            information, and assisting users to stay organised with travel
            details. Flight tracking, hotel deals, and budget-friendly tips make
            planning more efficient and convenient.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Finding joy in the journey",
      date: "31 Oct",
      imageUrl: Trip3,
      content: (
        <div>
          <h2>Envelop Yourself with Women Who Want To See You Win</h2>
          <p>
            Developing a successful travel app involves a comprehensive process,
            starting with concept design and then coding, testing, and
            deployment. The development process requires selecting the right
            programming languages, tools, and frameworks, such as Kotlin for
            Android or React Native for cross-platform compatibility. It also
            integrates key features like real-time updates, payment gateways,
            and offline capabilities to ensure the app delivers an efficient and
            user-friendly experience.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Happiest exploring",
      date: "28 Oct",
      imageUrl: Trip4,
      content: (
        <div>
          <h2>Why We Miss Deadlines and How to Stop Doing It</h2>
          <p>
            Travel apps include features like price comparison, itinerary
            management, and real-time updates to improve the overall travel
            experience. The primary purpose of a travel app is to simplify and
            facilitate travel-related activities, offering convenience and
            efficiency for both leisure and business travellers. They aim to
            reduce the complexity of planning trips, save time, provide
            personalised recommendations, and ensure seamless access to
            important travel services. These apps empower users to make informed
            decisions quickly by consolidating various travel needs into a
            single platform.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Bags are packed",
      date: "27 Oct",
      imageUrl: Trip5,
      content: (
        <div>
          <h2>Prioritizing Mental Health in the Workplace</h2>
          <p>
            Travel apps work by integrating with a wide range of third-party
            services and APIs (Application Programming Interfaces), such as
            airline databases, hotel reservation systems, and map providers.
            Users input their preferences, such as destination, dates, and
            budget, and the app aggregates and displays relevant options.
            Machine learning and AI offer practical suggestions, while GPS
            technology provides location-based features like navigation or
            nearby recommendations. The history of travel apps began with the
            rise of the internet and mobile technology. Early online booking
            platforms emerged in the 1990s, but smartphones revolutionised the
            industry in the late 2000s. Apps like Expedia, TripAdvisor, and
            Airbnb gained prominence by providing a mobile-first approach to
            travel. Over time, these apps evolved to include advanced features
            such as augmented reality (AR) for immersive experiences and AI
            chatbots for instant support.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: "Destination FullWidth",
      date: "20 Oct",
      imageUrl: Trip6,
      content: (
        <div>
          <h2>How to find what you really want to do</h2>
          <p>
            According to a report by Amazon Web Services, the online travel
            booking market was estimated at $485.1 billion in 2022 and is
            expected to reach around $1589.6 billion by 2032. It is poised to
            grow at a Percentage Compound Annual Growth Rate (CAGR) of 12.6%
            from 2023 to 2032. Apps like Booking.com, Expedia, and Airbnb
            dominate the market, with millions of daily active users. Over 80%
            of travellers now use apps to plan or book their trips, with the
            Asia-Pacific region leading in adoption.
          </p>
        </div>
      ),
    },
  ];

  const post = blogPosts.find((p) => p.id === parseInt(postId));

  
  const mainCardControls = useAnimation();
  const [mainCardRef, mainCardInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (mainCardInView) {
      mainCardControls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
    }
  }, [mainCardInView, mainCardControls]);

 
  const recentPostsControls = useAnimation();
  const [recentPostsRef, recentPostsInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (recentPostsInView) {
      recentPostsControls.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } });
    }
  }, [recentPostsInView, recentPostsControls]);


  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="relative w-full h-auto">
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title + " Banner"}
          className="block w-full h-full object-cover transition-transform duration-500 transform scale-100 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h2 className="text-3xl font-semibold mb-2">{post.title}</h2>
          <p className="text-sm">{post.date}</p>
        </div>
      </div>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8">
          <motion.div
            ref={mainCardRef}
            className="lg:w-2/3 bg-white rounded-md shadow-md p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={mainCardControls}
          >
            <div className="mb-6">
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full rounded-md mb-4"
                />
              )}
              {post.content}
            </div>
          </motion.div>
          <motion.div
            ref={recentPostsRef}
            className="w-64 h-fit bg-white rounded-md shadow-md p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={recentPostsControls}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Recent Posts
            </h2>
            <ul className="space-y-4">
              {blogPosts
                .filter((p) => p.id !== parseInt(postId))
                .slice(0, 3)
                .map((recentPost) => (
                  <motion.li
                    key={recentPost.id}
                    className="flex items-center"
                    variants={listItemVariants}
                    initial="hidden"
                    animate={recentPostsInView ? "visible" : "hidden"}
                  >
                    <div className="bg-blue-500 text-white rounded-md py-2 px-3 mr-4 flex flex-col items-center justify-center w-14 h-14">
                      <span className="text-sm font-semibold">
                        {recentPost.date.split(" ")[0]}
                      </span>
                      <span className="text-xs uppercase">
                        {recentPost.date.split(" ")[1]}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 hover:text-blue-600 cursor-pointer">
                        {recentPost.title}
                      </h3>
                    </div>
                  </motion.li>
                ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;