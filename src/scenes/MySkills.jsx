import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("min-width: 1060px");

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADING AND IMAGE */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-verde">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-16 mb-7 font-[100]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a molestiae modi 
                        officiis nam facere omnis pariatur velit vel! Iusto, velit architecto. 
                        Explicabo nobis odit quae molestiae obcaecati, sit quasi!
                    </p>

                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                                before:w-full before:h-full before:border-2 before:border-verde before:z-[-1] "
                     >
                            <img 
                                src="assets/skills-image.png" 
                                className="z-10"
                                alt="skills" 
                            />
                        </div>
                    ) : (
                        <img src="assets/skills-image.png" className="z-10" alt="skills" />
                    )}

                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                <motion.div
                     className="md:w-1/3 mt-10"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0.4, duration: 0.5 }}
                     variants={{
                         hidden: { opacity: 0, y: 50 },
                         visible: { opacity: 1, y: 0 },
                     }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-verde absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5 font-[100]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia atque suscipit, assumenda a in esse dolore, 
                        debitis eveniet saepe rerum necessitatibus, nobis quo corrupti ullam soluta quas 
                        obcaecati eligendi voluptas!
                    </p>
                </motion.div>

                {/* INNOVATIVE*/}
            {/* <div className="md:flex md:justify-between mt-16 gap-32"> */}
                <motion.div
                     className="md:w-1/3 mt-10"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0.2, duration: 0.5 }}
                     variants={{
                         hidden: { opacity: 0, y: 50 },
                         visible: { opacity: 1, y: 0 },
                     }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Innovative</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-amarelo absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5 font-[100]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia atque suscipit, assumenda a in esse dolore, 
                        debitis eveniet saepe rerum necessitatibus, nobis quo corrupti ullam soluta quas 
                        obcaecati eligendi voluptas!assumenda a in esse dolore, 
                        debitis eveniet saepe rerum necessitatibus, nobis quo corrupti ullam soluta quas 
                    </p>
                </motion.div>

               {/* IMAGINATIVE */}
            {/* <div className="md:flex md:justify-between mt-16 gap-32"> */}
                <motion.div
                     className="md:w-1/3 mt-10"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0.4, duration: 0.3 }}
                     variants={{
                         hidden: { opacity: 0, y: 50 },
                         visible: { opacity: 1, y: 0 },
                     }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">IMAGINATIVE</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5 font-[100]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia atque suscipit, assumenda a in esse dolore, 
                        debitis eveniet saepe rerum necessitatibus, nobis quo corrupti ullam soluta quas 
                        obcaecati eligendi voluptas!assumenda a in esse dolore, 
                        debitis eveniet saepe rerum necessitatibus, nobis quo corrupti ullam soluta quas 
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MySkills;