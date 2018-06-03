export default {
  goSuper: () => {
    this.setState({
      name: 'Super Saiyan Daniel'
    });
    console.log(this.state.name);
  }
}