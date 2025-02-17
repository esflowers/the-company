interface Props {
    size?: string
}

export function IconPV({ size = '24' }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"
            width={size} height={size} viewBox="0 0 3.395 3.395">
            <path fill="currentColor" d="m 26.393398,5.648962 -2.2e-5,2.2231401 -1.322776,1.236e-4 1.25e-4,1.3213139 1.322776,-1.236e-4 7.3e-4,-5e-7 1.320218,2.434e-4 0.0011,-3.661e-4 2.41e-4,-1.3209487 -0.0015,9e-7 2.1e-5,-2.22314 z" transform="matrix(.44146 .44127 -.44203 .4407 -6.343 -12.887)"/>
            <path fill="currentColor" d="m -5.6510448,23.561277 -2.034955,2.76e-4 9e-7,0.0015 -1.49671,-4.52e-4 8.8e-5,1.321314 1.4963443,8.7e-5 -6.419e-4,1.322776 2.0345894,-6.42e-4 z" transform="matrix(.44205 -.4407 .44147 .44126 -6.343 -12.887)"/>
        </svg>
    )
}