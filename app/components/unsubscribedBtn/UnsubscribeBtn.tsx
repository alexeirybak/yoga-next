import Image from "next/image";

type UnsubscribeButtonProps = {
  handleUnsubscribe: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

export const UnsubscribeButton: React.FC<UnsubscribeButtonProps> = ({
  handleUnsubscribe,
}) => {
  return (
    <button
      className="absolute top-5 right-5 flex items-center justify-center md:text-[18px]"
      onClick={handleUnsubscribe}
    >
      <Image
        src="/icon-minus.svg"
        alt="Удалить курс"
        width={27}
        height={27}
        title="Удалить курс"
      />
    </button>
  );
};
