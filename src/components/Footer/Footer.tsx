import BasicLayout from "../Layout/BasicLayout";

const Footer = () => {
  return (
    <footer className="pb-12">
      <div>
        
      </div>
      <BasicLayout asChild >
        <div className="fixed bottom-0 left-0 right-0 w-full py-4 flex justify-between items-center gap-5 bg-secondary">
          <p className="heading01">YOUR EXTRAORDINARY DESINGER WHO CAN FEEL YOUR BRAND’S EMOTIONS.</p>
          {/* scroll indigator */}
          <div className="w-[24px] h-[40px] rounded-full bg-secondary border-[2px] border-primary relative">
            <span className="w-[8px] h-auto aspect-square rounded-full absolute top-[8px] left-1/2 -translate-x-1/2 animate-footer bg-primary"></span>
          </div>
        </div>
      </BasicLayout>
    </footer>
  );
};

export default Footer;
