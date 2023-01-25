module StaticPagesHelper
  def seek_user(id)
    User.find(id)
  end
end
