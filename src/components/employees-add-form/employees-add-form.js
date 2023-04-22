import { useState } from 'react';

import './employees-add-form.css';


const EmployeesAddForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    const onValueChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else {
            setSalary(value);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name.length < 3 || !salary) return;
        onAdd(name, salary);
        setName('');
        setSalary('');
    }

    return (
        <div className="app-add-form">
            <h3>Додати нового співробітника</h3>
            <form className="add-form d-flex" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Як його звати?"
                    name="name"
                    value={name}
                    onChange={onValueChange}
                />
                <input
                    type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name="salary"
                    value={salary}
                    onChange={onValueChange}
                />
                <button type="submit" className="btn btn-outline-light">
                    Додати
                </button>
            </form>
        </div>
    );
}

export default EmployeesAddForm;


/* class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Додати нового співробітника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Як його звати?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light">Додати</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm; */