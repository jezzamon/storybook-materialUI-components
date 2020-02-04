import React from 'react';
import {
  AlertCircle,
  ArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  ExternalLink,
  Eye,
  Heart,
  Home,
  List,
  Navigation,
  RotateCw,
  Shuffle,
  Unlock,
  Video,
  X,
  Plus,
  Minus,
} from 'react-feather';
import { IconLockOpen } from '../icons';

const icons = {
  AlertCircle,
  ArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  ExternalLink,
  Eye,
  Heart,
  Home,
  IconLockOpen,
  List,
  Navigation,
  RotateCw,
  Shuffle,
  Unlock,
  Video,
  X,
  Plus,
  Minus,
};

const FeatherIcon = ({ icon, ...props }) => {
  const Icon = icons[icon];
  return <Icon {...props} />;
};

export default FeatherIcon;
