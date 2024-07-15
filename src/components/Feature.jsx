import { Button } from "./Button";
import { ArrowIcon } from "./icons/Arrow";
import { Typography } from "./Typography";

export const Feature = () => {
  return (
    <div className="py-20 px-8 flex flex-col items-center space-y-10 text-center sm:py-[100px] sm:px-20 sm:items-start">
      <Typography size="lg" color="primary" weight="bold">
        Танд зориулсан шинэ үеийн банк
      </Typography>
      <Typography color="accident" size="sm" weight="base">
        Банкны салбар хаах цагийг мэдэх шаардлагагүй. Санхүүгийн бүх үйлчилгээг
        зайнаас аваарай.
      </Typography>

      <Button>
        <ArrowIcon className="group-hover:fill-white" />
      </Button>

      <div className="w-full h-[480px]">
        <img
          src="https://www.m-bank.mn/icons/landing/landing_3.png"
          alt="for-you"
        />
      </div>
    </div>
  );
};
