const applications = [
  {
    title: "Magnifi",
    description: "Social media app designed to connect users with similar listening habits.",
    image: "../assets/magnifi.png",
    repository: "https://github.com/HDavis147/Magnifi",
    deployment: "https://magnifi-6c0024370b61.herokuapp.com/"
  },
  {
    title: "Websight",
    description: "E-commerce site where users can submit project details and the Websight team will bring their project to life.",
    image: "../assets/websight.png",
    repository: "https://github.com/JoshON5/websight",
    deployment: "http://www.web-sight.us/"
  }
]

export default function Portfolio() {
  return (
      <div>
        <div className="m-8 w-screen flex flex-wrap flex-row place-content-center">
          <h2 className="text-4xl mt-[200px] w-auto pt-8">Applications</h2>
        </div>

        <div className="container mx-auto grid gap-10">
          {applications.map((application, i) => {
            return (
              <div className="relative p-12 flex flex-wrap flex-col justify-center" key={i}>
                <div className="flex flex-col place-content-center">
                  <h1 className="underline">{application.title}</h1>
                  <img className="absolute  h-[150px] w-[150px]"src={application.image}/>
                </div>
                <div className="flex flex-col">
                  <p className="py-9 text-center px-12">{application.description}</p>

                  <div>
                    <a href={application.deployment}className="px-5 py-2">Deployment</a>
                    <a href={application.repository} className="px-5 py-2">Repository</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  )
}