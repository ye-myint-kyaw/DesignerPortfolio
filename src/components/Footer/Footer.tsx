import BasicLayout from "../Layout/BasicLayout";

const Footer = () => {
  return (
    <footer className="pb-12">
      <div>
        
      </div>
      <BasicLayout asChild >
        <div className="fixed bottom-0 left-0 right-0 w-full py-4 flex justify-between gap-5">
          <p className="heading01">YOUR EXTRAORDINARY DESINGER WHO CAN FEEL YOUR BRAND’S EMOTIONS.</p>
          {/* scroll indigator */}
          <div></div>
        </div>
      </BasicLayout>
    </footer>
  );
};

export default Footer;
