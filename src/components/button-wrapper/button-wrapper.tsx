import { Button } from "@/components/ui/button";
import { IButtonWrapper } from "@/interface/components/button-wrapper.interface";
import { ReloadIcon } from "@radix-ui/react-icons";

const ButtonWrapper = ({ pending }: IButtonWrapper) => {
  return (
    <div>
      {!pending ? (
        <Button type="submit">Submit</Button>
      ) : (
        <Button type="submit">
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Process...
        </Button>
      )}
    </div>
  );
};
export default ButtonWrapper;
