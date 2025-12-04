import { convertMarkdownToHtml } from "../ts/utils/utils";

const Editorial = ({ data }: { data: string }) => {
    return (
        <div>
            <div
                id="description-body"
                className="mt-[36px] ml-[26px] text-[16px]"
                dangerouslySetInnerHTML={{
                    __html: convertMarkdownToHtml(data),
                }}
            ></div>
        </div>
    );
};

export default Editorial;