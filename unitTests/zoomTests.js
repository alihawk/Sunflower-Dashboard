describe('Zoom functionality', () => {
  it('should zoom in when zoom button is clicked', () => {
    const wrapper = mount(<Map />);
    const zoomButton = wrapper.find('.zoom-button');
    zoomButton.simulate('click');
    expect(wrapper.state().isZoomed).toEqual(true);
  });

  it('should zoom out when zoom button is clicked twice', () => {
    const wrapper = mount(<Map />);
    const zoomButton = wrapper.find('.zoom-button');
    zoomButton.simulate('click');
    zoomButton.simulate('click');
    expect(wrapper.state().isZoomed).toEqual(false);
  });
});
