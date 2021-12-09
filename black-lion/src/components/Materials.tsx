import React from 'react';

type State = {
    materials?: number[],
}

class Materials extends React.Component<State> {
    state: State = {
        materials: [],
    }

    componentDidMount() {
        const materialsURL = "https://api.guildwars2.com/v2/materials";
        fetch(materialsURL)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    materials: res,
                })
            });
    }

    render() {
        console.log(this.state.materials);
        var idxs = this.state.materials?.map((idx) =>
            <li key={idx}>{idx}</li>
        );
        return (
            <div className="Materials">
                <h2>Materials</h2>
                <ul className="list-disc list-inside">
                    {idxs}
                </ul>
            </div>
        )
    }
}

export default Materials;
