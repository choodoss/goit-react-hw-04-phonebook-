import PropTypes from 'prop-types';
import { SerchSection, Label, Input } from './Search.styled'
import { useId } from 'react';

export default function Search({ hendleFilter, filter }) {
    const newId = useId();
    const search =
        <SerchSection>
            <Label htmlFor={newId}>Finde contact by name </Label>
            <Input id={newId}
                name="filter"
                pattern="[\p{L} '-]+"
                value={filter}
                onChange={hendleFilter} />
        </SerchSection>
    return search;
};


Search.protoType = {
    hendleFilter: PropTypes.func,
    filter: PropTypes.string,
}

