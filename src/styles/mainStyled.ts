import styled from "styled-components";

export const StyledContainer = styled.div`
    padding: 40px;
`;

export const StyledDivRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 24px;
    margin-top: 15px;

    .weather-item {
        &.city {
            min-width: 200px;
        }

        h2,
        h3 {
            color: #337ab7;
            font-size: 24px;
            line-height: 36px;
            margin: 0 0 10px 0;
        }

        h3 {
            font-size: 22px;
        }
    }
`;

export const StyledWeatherItem = styled.div`
    &:nth-of-type(odd) {
        background: #f9f9fa;
    }
`;

export const StyledDivRowWrap = styled.div`
    display: inline-flex;
    flex-direction: column;

    p {
        font-size: 20px;
        line-height: 20px;
        margin: 0 0 10px 0;
    }
`;

export const StyledMessage = styled.p`
    font-size: 20px;
    color: #333;
    margin: 24px 0;
`;
