import React from 'react';
import profileImage from "../assets/images/profile.jpg";

const About = (): React.ReactElement => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg shadow-lg">
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Profile Info */}
                <div>
                  <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                    {/* Profile Image */}
                    <div className="w-32 h-32 shrink-0">
                    <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-[12px] border-transparent gradient-bg bg-clip-border"
                    />
                    </div>
                    {/* Info next to image */}
                    <div className="space-y-2">
                    <div>
                        <span className="text-black font-bold">Name: </span>
                        <span className="text-gray-800">Diksha Amol Sugandhi</span>
                    </div>
                    <div>
                        <span className="text-black font-bold">Profile: </span>
                        <span className="text-gray-800">Student at GCOE, Chh. Sambhajinagar</span>
                    </div>
                    <div>
                        <span className="text-black font-bold">Email: </span>
                        <span className="text-gray-800">dikshasugandhi277@gmail.com</span>
                    </div>
                    <div>
                        <span className="text-black font-bold">Current Location: </span>
                        <span className="text-gray-800">Chh. Sambhajinagar, Maharashtra, India</span>
                    </div>
                    </div>
                  </div>
                  <a
                    href="/Diksha Resume.pdf"
                    target="_blank"
                    className="inline-block px-8 py-3 gradient-bg text-white rounded-full hover:opacity-90 transition-opacity"
                  >
                    View Resume
                  </a>
                </div>

                {/* Skills Section */}
                <div className="mt-12">
              <h2 className="text-3xl font-bold mb-8 text-black relative pb-3">
                Skills
                <div className="absolute bottom-0 left-0 w-20 h-1 gradient-bg" />
                </h2>                  <div className="space-y-4">
                    {[{ name: 'Python', level: 60 },
                      { name: 'Java', level: 80 },
                      { name: 'JavaScript', level: 80 },
                      { name: 'React', level: 90 },
                      { name: 'Typescript', level: 80 },
                      { name: 'Databases', level: 70 },
                    ].map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-800">{skill.name}</span>
                          <span className="text-primary-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-full gradient-bg rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
              <h2 className="text-3xl font-bold mb-8 text-black relative pb-3">
                About me
                <div className="absolute bottom-0 left-0 w-20 h-1 gradient-bg" />
                </h2>

                <div className="space-y-6 text-gray-800">
                  <p>
                    I am a Computer Science and Engineering student at Government College of Engineering, Chh. Sambhajinagar, currently pursuing my Bachelor's of Technology (B.Tech) with a CGPA of 9.02 (expected graduation in April 2026).
                  </p>
                  <p>
                    I hold a Diploma in Information Technology from Government Polytechnic, Chh. Sambhajinagar, where I graduated with 92.32%. I completed my X (CBSE) from The Jain International School with 94.60% in 2020.
                  </p>
                  <p>
                    Currently, I work as a freelance problem designer, creating and developing SQL and DSA questions on a per-question basis. I focus on crafting unique, high-quality problems that challenge and assess problem-solving skills, catering to different difficulty levels.
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-black">Libraries and Tools:</h3>
                    <p className="text-gray-700">
                      Node.js, Next.js, Express.js, MongoDB, PostgreSQL, Git,GitHub, Postman
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
