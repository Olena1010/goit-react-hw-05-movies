import { Circles } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderWrapper>
            <Circles
                height="150"
                width="150"
                color="rgba(3, 37, 65)"
                ariaLabel="circles-loading"
                visible={true}
            />
        </LoaderWrapper>
    );
};
export default Loader;