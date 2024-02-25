const Acordion = () => {
  return (
    <>
      <h1 className="text-gray-custom font-bold text-3xl text-center mt-5">
        Our <span className="text-red-custom"> values</span> stand steadfast
      </h1>

      <div className="m-2 space-y-2 border-b">
        <div className="group flex flex-col gap-2 rounded-l p-5" tabIndex="1">
          <div className="flex cursor-pointer items-center justify-between">
            <span className="text-gray-custom font-bold text-lg md:text-2xl">
              Our <span className="text-red-custom">Values</span>
            </span>
            <img
              src="/src/svg/expand_more_FILL0_wght400_GRAD0_opsz24.svg"
              className="w-5 md:w-7 transition-all duration-500 group-focus:-rotate-180"
              alt="expand icon"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-9 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            <div className="bg-gray-D9D9D9 w-40 h-40 md:w-36  md:h-36 flex items-center justify-center rounded-full overflow-hidden">
              <img
                className="w-24 h-24 object-cover"
                // src="/src/img/3a1130c99a8f060fcc1557cd2e79e446.png"
                src="https://s3-alpha-sig.figma.com/img/f5a6/7092/3a1130c99a8f060fcc1557cd2e79e446?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JWd7Q6L29u9CHX0zeB60pwXAOSm2AnHmhX5Mz9XBenEv0sQSb0KWO1i6JVBjGpFTazb-zGGR135AC32pZHb1-pfTm7ck564Ce9CzpNxLBfRPTzdKXXJPJMVulVVW5kbfYlaXZZSKm7Ui7ysPOa~GcC60e3NqWqzNXG5GwjRaGsvr6fjBYp~WsVMcNx0vwjYU6tycbjJKV4NRekvSezxF8UGd9~nY5GsFukl1bSLaXy7TPjzrD12tlTahnEXy2nMzESjvwE9CIKPeK614sDOtMaqWViNYIuQ4D9qZ4WJOL~Y4V-FCA8po~e2ZMC5E5LpGxPKO8sLUjKy2JcLrto70ZA__"
                alt="user image"
              />
            </div>

            <ul className="text-sm text-gray-4B4D4F font-bold md:text-base">
              <li>Time</li>
              <li>Dependability</li>
              <li>Tenacity</li>
              <li>Communication</li>
              <li>Integrity</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="m-2 space-y-2 border-b">
        <div className="group flex flex-col gap-2 rounded-l p-5" tabIndex="1">
          <div className="flex cursor-pointer items-center justify-between">
            <span className="text-gray-custom font-bold text-lg md:text-2xl">
              Our <span className="text-red-custom"> Commitment</span>
            </span>
            <img
              // src="/src/svg/expand_more_FILL0_wght400_GRAD0_opsz24.svg"
              src="https://s3-alpha-sig.figma.com/img/205f/970d/ffd96e54c7dc6543767fbddd3292a154?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PFBeJrcTrAGSP-rg7TfH2WLLXBbWq8qdFVHxi88o~u78U754KKP2bc1nPOOq8cSJsfsurqzepvCd~ymfP0FnQbBLg7-9VNoTtrsujER9HrblnCE7mPzLG5aphFiIlWLZDxA5jk~G1Dv3skFegFvxatkcO1QVkh2GRQHay2zuly5O2wwnuMeRPetGSz2PryhaPn1jeE20bBpxQKAkx2CtwVWgV44XafFUCUPS01RnYiqx4TxTZv25mJGxE8ufr9WEeMlNtrC0u3Y6P18NNAycg1v-CkgvkTgiAHDKYC4NkkSQS0nNI8iXg9VsRhHPh~P3sX6lmfYTONLKAh6UpvQRSg__"
              className="w-5 md:w-7 transition-all duration-500 group-focus:-rotate-180"
              alt="expand icon"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-9 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 w-full">
            <div className="bg-gray-D9D9D9 w-40 h-40 md:w-40  md:h-36 flex items-center justify-center rounded-full overflow-hidden">
              <img
                className="w-24 h-24 object-cover"
                src="/src/img/ffd96e54c7dc6543767fbddd3292a154.png"
                alt="user image"
              />
            </div>

            <p className="w-full">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus iusto labore dicta a quod, quos eveniet ipsa. Explicabo
              voluptas recusandae dignissimos unde, quasi deserunt adipisci
              laudantium hic, dolorem qui soluta?
            </p>
          </div>
        </div>
      </div>

      <div className="m-2 space-y-2 border-b">
        <div className="group flex flex-col gap-2 rounded-l p-5" tabIndex="1">
          <div className="flex cursor-pointer items-center justify-between">
            <span className="text-gray-custom font-bold text-lg md:text-2xl">
              About <span className="text-red-custom"> Me</span>
            </span>
            <img
              src="/src/svg/expand_more_FILL0_wght400_GRAD0_opsz24.svg"
              className="w-5 md:w-7 transition-all duration-500 group-focus:-rotate-180"
              alt="expand icon"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-9 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 w-full">
            <p className="w-full">
              My name is Victor, I am 23 years old, and currently, I am pursuing
              my master's degree in education while also continuing to learn
              about programming. My goal is to be able to teach classes that
              will be helpful to my future students. I have 3 years of
              experience in the technology field, but professionally, I have
              been working for a year and a half.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acordion;
