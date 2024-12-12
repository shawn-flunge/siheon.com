import Image from "next/image";

const SvgButton = ({path, onClick} : {path: string, onClick: Function}) => {

    return <div className="w-6 h-6 lg:h-9 lg:w-9 hover:cursor-pointer" onClick={() => onClick()}>
        <Image
            src={path}
            alt="Icon Button"
            width={0}
            height={0}
            sizes="100vw"
            style={{
                width: '100%',
                height: 'auto',
            }}
        />
    </div>
}


export default SvgButton;