import CustomButton from "@/components/CustomButton";

export default function NotFound() {
  return (
    <section className="w-full block not-found">
      <div className="container">
        <div className="flex flex-col py-[60px] items-center justify-center min-h-screen text-center gap-[16px] md:gap-[24px]">
          <h1 className="font-bold gradient-text text-[100px] md:text-[180px] leading-[1.2]">
            404
          </h1>
          <h2 className="h1 md:leading-[1.2]">Ooops, page not founded</h2>
          <p className="md:text-[24px]">
            The page you were looking for does not exist.
          </p>
          <CustomButton
            href="/"
            className="m-auto !py-[8px] md:!max-w-[280px] !w-full !text-[18px] mt-[38px] md:mt-[16px] !mb-0"
          >
            Go To Main
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
