import styled from "styled-components";

const Bar = styled.div`
  display: block;
`;

const Logo = styled.img.attrs({
  width: 40,
})``;

const Profile = styled.img.attrs({
  width: 50,
})``;

const Title = styled.h5``;

const Flag = styled.img.attrs({
  width: 15,
})``;

const Country = styled.span`
  font-size: 0.8em;
  margin-right: 5px;
`;

const Icon = styled.span.attrs({
  className: "icon",
})`
`;

const Muted = styled.span.attrs({
  className: "text-muted",
})`
  font-size: 0.8em;
  margin-right: 5px;
`;

const BR = styled.br``;

Bar.Logo = Logo;
Bar.Profile = Profile;
Bar.Title = Title;
Bar.Flag = Flag;
Bar.Country = Country;
Bar.Icon = Icon;
Bar.Muted = Muted;
Bar.BR = BR;

export default Bar;
