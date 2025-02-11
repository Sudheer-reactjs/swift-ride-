import Image from "next/image";

const Delivery = () => {
  return (
    <>
      <div className="w-full block">
        <div className="container">
          <h2 className="h1 lg:text-center">
            Easy <span className="gradient-text">pickup or delivery </span> in
            Atlanta
          </h2>
          <div className="flex flex-col lg:flex-row items-center mt-[24px] md:mt-[40px]">
            <div className="lg:w-1/2 large-text ">
              <div className="w-full lg:max-w-[524px] flex flex-col gap-[24px]  md:gap-[40px] pr-[15px]">
                <div className="large-text font-normal">
                  <p>
                    We’ll prep, clean, and have the car ready for pick up one
                    day after you subscribe. Simply place your order and come
                    pick up your car!
                  </p>
                </div>
                <div className="flex flex-col gap-[24px]">
                  <div>
                    <h5 className="font-bold text-[#57E667] text-[20px] pb-[24px]">
                      Pick up your car in 2 simple steps:
                    </h5>
                    <p>
                      <b>Come to the location: </b> <br></br>Come to the
                      specified location at the time and date you selected.
                    </p>
                  </div>

                  <p>
                    <b>Pick up: </b>
                    <br></br> Show the member of our staff your driver&apos;s
                    license and pick up the car!
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-[24px] lg:mt-0">
              <Image
                src="/assets/map.png"
                alt="map"
                layout="intrinsic"
                width={630}
                height={514}
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
