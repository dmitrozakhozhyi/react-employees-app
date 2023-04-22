import { useState } from 'react';
import './search-panel.css';

function SearchPanel(props) {
    const [term, setTerm] = useState('');

    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    }

    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Знайти співробітника"
            value={term}
            onChange={onUpdateSearch}
        />
    );
};

export default SearchPanel;

/* class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Знайти співробітника"
                value={this.state.term}
                onChange={this.onUpdateSearch} />
        )
    }
}

export default SearchPanel; */