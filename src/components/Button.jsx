export const Button = ({ children }) => {
  return (
    <button className="border border-border w-16 h-10 flex items-center justify-center rounded-2xl bg-transparent hover:bg-branding transform duration-200 group">
      {children}
    </button>
  );
};
