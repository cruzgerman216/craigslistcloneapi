class Category < ApplicationRecord
    has_many :subcategories, :class_name => "Category", :foreign_key => "parent_id", :dependent => :destroy

    has_many :posts

    def self.primary_categories
        # left join with subcategories and see what categories have parent_id:nil
        Category.includes(:subcategories).where(categories:{parent_id:nil})
    end

    def self.sub_categories(id)
        # left join with subcategories and see what categories have parent_id:nil
        Category.includes(:subcategories).where(categories:{parent_id:id})
    end

end
