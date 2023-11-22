export default function Button({
    text,
    onClick,
  }: {
    text: string;
    onClick: () => void;
  }) {
    return (
      <button
        className="rounded-md  bg-primary md:py-1 px-1 lg:py-4 lg:px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  