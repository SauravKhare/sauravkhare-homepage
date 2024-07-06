import { ReactNode } from "react";

export default function Paragraph({
	classname,
	children,
}: {
	classname: string;
	children?: ReactNode | any;
}) {
	return <p className={classname}>{children}</p>;
}
