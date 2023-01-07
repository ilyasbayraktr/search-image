import React, { Component } from 'react'

export default class SearchInput extends Component {

    constructor(props) {
        super(props)
        this.state = { entry: "" }
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearchSubmit(this.state.entry);
    }

    render() {
        return (
            <div className='mt-3 mb-5 flex items-center justify-center'>
                <form onSubmit={this.onFormSubmit}
                    className='bg-sky-900 rounded-md flex justify-between w-full max-w-xs pl-2'>
                    <input onChange={(event) => this.setState({ entry: event.target.value })}
                        value={this.state.entry}
                        className='bg-transparent w-full text-white outline-none'
                        placeholder='Search...'
                        type="text">
                    </input>
                    <button className='text-2xl rounded-r-md cursor-pointer hover:bg-[#7abfec] transition-all'>&#x1F50D;</button>
                </form>
            </div>
        )
    }
}

