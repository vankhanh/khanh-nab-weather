import styled from "styled-components";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

export const StyledDivSearch = styled.div`
    max-width: 300px;

    input {
        min-width: 100%;
    }
`;

export const StyledSearchIcon = styled(SearchOutlinedIcon)`
    margin-left: 10px;
`;

export const StyledSection = styled.section`
    .alert-item {
        max-width: fit-content;
        margin-top: 15px;
    }
`;
