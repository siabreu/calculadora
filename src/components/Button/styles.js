import styled from 'styled-components';
import PropTypes from 'prop-types';


export const ButtonContainer = styled.button`
    padding: 10px;
    border: 1px solid #CDCDCD;
    // background-color: #FF000F;
    background-color:
        ${(props) => props.variant === 'primary'
                        ? '#FF7D33' : '#F2F2F2' };
    color: #8E8E8E;
    font-size: 24px;
    font-weight: 700;
    flex: 1;

    &:hover{
        opacity: 0.6;
    }
`

ButtonContainer.propTypes = {
	variant: PropTypes.oneOf(['secondary', 'primary']),
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

ButtonContainer.defaultProps = {
	variant: 'secondary',
};