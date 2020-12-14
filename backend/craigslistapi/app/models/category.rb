class Category < ApplicationRecord
    has_many :subcategories, :class_name => "Category", :foreign_key => "parent_id", :dependent => :destroy

    has_many :posts

    def self.primary_categories
        Category.includes(:subcategories).where(categories:{parent_id:nil})
    end

    def self.sub_categories(id)
        Category.includes(:subcategories).where(categories:{parent_id:id})
    end

end
