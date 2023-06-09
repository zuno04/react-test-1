import React from "react";
import styled from "styled-components";

const CategoryNavigation = ({ categories, activeCategory, onChange }) => {
  return (
    <CategoryList>
      <CategoryMenu>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            active={activeCategory === category.id ? "active" : ""}
            onClick={() => onChange(category.id)}
          >
            {category.name}
          </CategoryItem>
        ))}
      </CategoryMenu>
    </CategoryList>
  );
};

export default CategoryNavigation;

const CategoryList = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.7rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CategoryMenu = styled.ul`
  list-style: none;
  width: 100%;
  background-color: #333;
  display: flex;
`;

const CategoryItem = styled.li`
  margin-right: 15px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 20px;
  color: white;
  cursor: pointer;
  background: ${({ active }) => (active ? "#90c300" : "none")};

  &:hover {
    background-color: #90c300;
  }
`;
