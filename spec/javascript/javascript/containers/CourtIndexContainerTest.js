import React from 'react'
import CourtIndexContainer from '../../../app/javascript/react/containers/CourtIndexContainer'
import testHelper from '../testHelper'

describe('CourtIndexContainer', () => {
  let wrapper
  let courts

  beforeEach(() => {
    courts = [
      {id: 1, name: 'Fallon Field'}
    ]

    wrapper = shallow(
      <CourtIndexContainer />
    );
  });

  it('should check the default state of courts', () => {
    expect(wrapper.state()).toEqual({ courts: [] })
  });

  it('should render a CourtTile component', () => {
    wrapper.setState({ courts: courts })
    expect(wrapper.state()).toEqual({ courts: [{ id: 1, name: 'Fallon Field'}] })
  });
})
