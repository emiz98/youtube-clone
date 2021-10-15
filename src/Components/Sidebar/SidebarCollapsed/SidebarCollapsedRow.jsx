import "./sidebarCollapsedRow.scss";

const SidebarCollapsedRow = ({ selected, Icon, title }) => {
  return (
    <div className={`sidebarCollapsedRow ${selected && "selected"}`}>
      <Icon className="sidebarCollapsedRow_icon" />
      <div className="sidebarCollapsedRow_title">{title}</div>
    </div>
  );
};

export default SidebarCollapsedRow;
